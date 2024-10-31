import {Button, TextField} from "@mui/material";
import {useReplicant} from "@nodecg/react-hooks";
import Papa from "papaparse";
import React, {useEffect, useRef, useState} from "react";
import {Player} from "../../../types/schemas";
import {PlayerControl} from "../player/playerDropdown";

export const PlayerSelect = () => {
	const [options, setOptions] = useState<string[]>([]);
	const [selectedValues, setSelectedValues] = useState<string[]>(
		Array(6).fill(""),
	);
	const [racerCount, setRacerCount] = useState<number>(1);
	const [inputName, setInputName] = useState<string>("");
	const [additionalPlayer, setAdditionalPlayer] = useState<string[]>([]);
	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const [player, setPlayer] = useReplicant<Player>("player");

	// open csv
	const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			Papa.parse(file, {
				complete: function (results: any) {
					const columnData = results.data.map(
						(row: any) => row["名前（ハンドルネーム）"],
					);
					setOptions(columnData.filter((value: any) => value));
				},
				header: true, // 最初の行をヘッダーとして扱う
			});
		}
	};

	const handleOpenCSV = () => {
		fileInputRef.current?.click();
	};

	// ドロップダウンの選択を管理
	const handleSelectChange = (index: number, value: string) => {
		const newSelectedValues = [...selectedValues];
		newSelectedValues[index] = value;
		setSelectedValues(newSelectedValues);
	};

	// racerCountが変更されたときにselectedValuesの長さを変更する
	useEffect(() => {
		// 新しいselectedValuesの長さをracerCountに合わせる
		setSelectedValues((prevSelectedValues) => {
			// もしracerCountが大きくなったら、新しい空文字列の要素を追加
			if (racerCount > prevSelectedValues.length) {
				return [
					...prevSelectedValues,
					...Array(racerCount - prevSelectedValues.length).fill(""),
				];
			}
			// もしracerCountが小さくなったら、その分要素を切り捨てる
			return prevSelectedValues.slice(0, racerCount);
		});
	}, [racerCount]); // racerCountを依存配列に追加

	return (
		<div>
			<div style={{marginBottom: 15}}>
				<label htmlFor='racerCount'>レース人数: </label>
				<select
					id='racerCount'
					value={racerCount}
					onChange={(e) => setRacerCount(Number(e.target.value))}
				>
					{[1, 2, 3, 4, 5, 6, 7].map((count) => (
						<option key={count} value={count}>
							{count}
						</option>
					))}
				</select>
			</div>

			{/* レース人数分のドロップダウンを表示 */}
			{options.length > 0 && (
				<div>
					{Array.from({length: racerCount}).map((_, index) => (
						<PlayerControl
							key={index}
							playerIndex={index + 1}
							options={options}
							selected={(value) => handleSelectChange(index, value)}
						/>
					))}
				</div>
			)}

			<div style={{display: "block", alignItems: "center"}}>
				<TextField
					label={"一覧に走者を追加"}
					value={inputName}
					style={{width: 250, marginTop: 15, marginBottom: 15, marginLeft: 5}}
					onChange={(e) => {
						setInputName(e.target.value);
					}}
				/>
				<Button
					disabled={inputName === ""}
					variant='contained'
					color='primary'
					size='large'
					style={{marginLeft: 30, marginTop: 21}}
					onClick={() => {
						setAdditionalPlayer((prevItems) => [...prevItems, inputName]);
						setOptions((prevOptions) => [...prevOptions, inputName]);
						setInputName("");
					}}
				>
					追加
				</Button>
			</div>

			{/* 選択中のプレイヤー名表示 */}
			<div>
				<h3>選択中の走者</h3>
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

			<input
				type='file'
				accept='.csv'
				ref={fileInputRef}
				onChange={handleFileUpload}
				style={{display: "none"}}
			/>
			<div>
				<Button
					variant='contained'
					color='secondary'
					component='label'
					size='large'
					style={{marginLeft: 5, marginRight: 11}}
					onClick={handleOpenCSV}
				>
					CSVファイルを開く
				</Button>
				<Button
					variant='contained'
					color='success'
					size='large'
					style={{marginRight: 11}}
					onClick={() => {
						setPlayer(selectedValues);
						nodecg.sendMessage("updatePlayerInfo");
						console.log(player?.length);
					}}
				>
					更新
				</Button>
				<Button
					variant='contained'
					color='warning'
					size='large'
					style={{marginRight: 11}}
					onClick={() => {
						setInputName("");
						setPlayer([]);
						setAdditionalPlayer([]);
						setOptions((prevOptions) =>
							prevOptions.filter((item) => !additionalPlayer.includes(item)),
						);
						setSelectedValues(Array(racerCount).fill("")); // 選択中のドロップダウンを空白にする
						nodecg.sendMessage("updatePlayerInfo");
					}}
				>
					クリア
				</Button>
			</div>
		</div>
	);
};
