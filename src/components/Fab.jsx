import React, { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setIsFabOpen } from "../features/user/userSlice";
import FabCard from "./FabCard";
import { feedbackOptions } from "../data/staticData";
import { thumbStars } from "../assets/Icons/icons";

const Fab = () => {
	const isFabOpen = useSelector((state) => state.user.isFabOpen);
	const [selectedOption, setSelectedOption] = useState(null);
	const dispatch = useDispatch();

	const handleOptionClick = (option) => {
		setSelectedOption(option);
	};
	// const handleCardClose = () => {
	// 	setSelectedOption(null);
	// };

	return (
		<>
			<div
				className={`fixed  ${
					window.innerWidth < 450 && selectedOption === null
						? "bottom-20 right-6 flex flex-col "
						: window.innerWidth < 450 && selectedOption !== null
						? "bottom-0 w-full flex flex-col-reverse"
						: window.innerWidth > 450 && selectedOption !== null
						? "bottom-8 right-24"
						: "bottom-24 right-8 flex flex-col"
				}`}>
				{selectedOption ? <FabCard selectedOption={selectedOption} /> : null}
				{isFabOpen || selectedOption ? (
					<div
						className={`flex ${
							window.innerWidth < 450 && selectedOption === null
								? "flex flex-col"
								: window.innerWidth < 450 && selectedOption !== null
								? "left-0 mb-2"
								: window.innerWidth > 450 && selectedOption !== null
								? "flex bottom-6 right-12 "
								: " flex flex-col  right-8 bottom-8"
						}    gap-2 w-full`}>
						{feedbackOptions.map((option) => (
							<div
								key={option.id}
								className='flex items-center justify-end w-full gap-2'>
								{selectedOption === null ? (
									<div
										className={`flex items-center px-3 py-1 rounded-t-lg rounded-bl-lg shadow-lg ${
											selectedOption === option ? "" : "bg-white text-gray-900"
										}`}
										onClick={() => handleOptionClick(option)}>
										<span>{option.label}</span>
									</div>
								) : null}
								<button
									className={`flex items-center justify-center w-12 h-12 p-2 rounded-full shadow-lg ${
										selectedOption === option
											? "border-2 border-[#808080] bg-white text-gray-800"
											: "bg-gray-100 text-gray-900"
									}`}
									onClick={() => handleOptionClick(option)}>
									<img
										src={option.logo}
										alt={option.label}
										className='object-contain w-full h-full '
										srcSet=''
									/>
								</button>
							</div>
						))}
						<button
							className={` z-10 flex items-center justify-center w-12 h-12 bg-[#F8F8F8] text-gray-900 rounded-full shadow-lg   ${
								selectedOption !== null && window.innerWidth < 450
									? "block "
									: "hidden"
							} `}
							style={{
								boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.5)", // Shadow for icon and text
								borderColor: isFabOpen ? "#808080" : "transparent", // Border color for ellipse
								overflow: "hidden", // Ensure overflow doesn't show when ellipse is applied
							}}
							onClick={() => {
								dispatch(setIsFabOpen(!isFabOpen));
								selectedOption ? setSelectedOption(null) : null;
							}}>
							{isFabOpen ? (
								<FiX className='w-8 h-8' style={{ color: "#0F0F0F" }} /> // Icon color change
							) : (
								<img
									src={window.innerWidth > 450 ? "/writer.png" : "/writer.png"}
									className='absolute w-6 h-6'
									alt=''
									style={{ color: "#F8F8F8" }}
								/> // Icon color change
							)}
						</button>
					</div>
				) : null}
			</div>
			<button
				className={`fixed  bottom-6 right-6 lg:bottom-8 lg:right-8 z-10 flex items-center justify-center w-12 h-12 bg-black lg:bg-[#F8F8F8]  rounded-full shadow-lg   ${
					selectedOption !== null && window.innerWidth < 450
						? "hidden"
						: "block"
				} `}
				style={{
					boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.5)", // Shadow for icon and text
					borderColor: isFabOpen ? "#808080" : "transparent", // Border color for ellipse
					overflow: "hidden", // Ensure overflow doesn't show when ellipse is applied
				}}
				onClick={() => {
					dispatch(setIsFabOpen(!isFabOpen));
					selectedOption ? setSelectedOption(null) : null;
				}}>
				{isFabOpen ? (
					<FiX className='w-8 h-8 text-white lg:text-black' /> // Icon color change
				) : (
					<img
						src={window.innerWidth > 450 ? "/writer.png" : thumbStars}
						className='absolute w-6 h-6 bg-black lg:bg-white'
						alt=''
					/> // Icon color change
				)}
			</button>
		</>
	);
};

export default Fab;
