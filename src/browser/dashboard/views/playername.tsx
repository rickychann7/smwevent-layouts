import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@mui/material';
import Papa from 'papaparse';
import { Player } from '../../../types/schemas';
import { render } from '../../render';

interface PlayerDropdownProps {
  playerIndex: number;
  options: string[];
  selected: (value: string) => void;
}

const player = nodecg.Replicant<Player>('player');

const PlayerDropdown: React.FC<PlayerDropdownProps> = ({ playerIndex, options, selected }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    selected(value); // 親コンポーネントに選択値を通知
  };

  return (
    <div>
      <label htmlFor={`dropdown-${playerIndex}`}>プレイヤー {playerIndex}: </label>
      <select id={`dropdown-${playerIndex}`} value={selectedValue} onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export const App = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>(Array(6).fill(''));
  const [racerCount, setRacerCount] = useState<number>(1); // ドロップダウンの数を管理
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // CSVファイルの読み込み
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      Papa.parse(file, {
        complete: function (results: any) {
          // 「名前（ハンドルネーム）」列の抽出
          const columnData = results.data.map((row: any) => row['名前（ハンドルネーム）']);
          setOptions(columnData.filter((value: any) => value)); // 空白行を除外
        },
        header: true, // 最初の行をヘッダーとして扱う
      });
    }
  };

  // ボタンクリックでファイル選択をトリガー
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // ドロップダウンの選択を管理
  const handleSelectChange = (index: number, value: string) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = value;
    setSelectedValues(newSelectedValues);
  };

  const updateName = () => {
    if (player.value != undefined) {
      player.value.name = selectedValues;
      player.value.racer = racerCount;
      nodecg.sendMessage('updatePlayerInfo');
    }
  };

  // racerCountが変更されたときにselectedValuesの長さを変更する
  useEffect(() => {
    // 新しいselectedValuesの長さをracerCountに合わせる
    setSelectedValues((prevSelectedValues) => {
      // もしracerCountが大きくなったら、新しい空文字列の要素を追加
      if (racerCount > prevSelectedValues.length) {
        return [...prevSelectedValues, ...Array(racerCount - prevSelectedValues.length).fill('')];
      }
      // もしracerCountが小さくなったら、その分要素を切り捨てる
      return prevSelectedValues.slice(0, racerCount);
    });
  }, [racerCount]); // racerCountを依存配列に追加

  return (
    <div>
      <input type="file" accept=".csv" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} />
      <Button variant="contained" component="label" onClick={handleButtonClick}>
        Open .csv file
      </Button>
      <br />

      {/* ドロップダウンの数を選択するセレクトボックス */}
      <label htmlFor="racerCount">レース人数: </label>
      <select id="racerCount" value={racerCount} onChange={(e) => setRacerCount(Number(e.target.value))}>
        {[1, 2, 3, 4, 5, 6].map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </select>

      {/* 選択されたドロップダウンの数だけプレイヤードロップダウンを表示 */}
      {options.length > 0 && (
        <div>
          {Array.from({ length: racerCount }).map((_, index) => (
            <PlayerDropdown
              key={index}
              playerIndex={index + 1}
              options={options}
              selected={(value) => handleSelectChange(index, value)}
            />
          ))}
        </div>
      )}

      {/* 各プレイヤーの選択結果を表示 */}
      <div>
        <h3>選択中のプレイヤー</h3>
        <ul>
          {selectedValues.map(
            (value, index) =>
              value && (
                <li key={index}>
                  プレイヤー {index + 1}: {value}
                </li>
              ),
          )}
        </ul>
      </div>

      <Button variant="contained" color="success" onClick={updateName}>
        更新
      </Button>
    </div>
  );
};

render(<App />);
