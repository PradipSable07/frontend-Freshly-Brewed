import React from "react";
import { useState } from "react";
export function FilterBar({}) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("Popular");

	const handleButtonClick = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option) => {
		setSelectedOption(option);
		setIsOpen(false);
	};
	return (
		<div className='w-full flex justify-between items-center'>
			<h3 className=' text-2xl  font-Poppins font-bold text-[#F8F8F8] '>
				Answers (23){" "}
			</h3>

			<div className=' text-lg font-Poppins font-medium text-[#F8F8F8]  flex justify-start items-center gap-4'>
				Sorted By :
				<div className='relative'>
					<button
						className='bg-[#F8F8F8] px-4 py-2 text-emerald-900 rounded inline-flex items-center'
						onClick={handleButtonClick}>
						{selectedOption}
						<svg
							width='21'
							height='9'
							viewBox='0 0 21 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M0.919067 0.231445L10.9596 8.76876L21 0.231445H0.919067Z'
								fill='#2A2A2A'
							/>
						</svg>
					</button>
					{isOpen && (
						<div className='absolute z-10 bg-white mt-2 py-2 w-48 rounded-md shadow-lg'>
							<a
								href='#'
								className={`block px-4 py-2 text-gray-800 hover:bg-gray-300 ${
									selectedOption === "Popular" ? "bg-gray-300" : ""
								}`}
								onClick={() => handleOptionClick("Popular")}>
								Popular
							</a>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
