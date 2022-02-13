import { useState } from 'react';
import SearchResults from '../SearchResults';
import RobotCard from '../RobotCard';

const Search = ({ robotsData }) => {
	const [searchQuery, setSearchQuery] = useState('');

	/**
	 * @function
	 * Filters and returns robots, that includes filter parameter in their name.
	 * @param {string} filter
	 * @returns {object[]} Filtered array of robots
	 */
	const filteredRobots = (filter) => {
		return robotsData.filter((robot) =>
			robot.name.toLowerCase().includes(filter.toLowerCase())
		);
	};

	return (
		<div className="search">
			<div className="search__bar">
				<input
					id="robot-search"
					className="search__bar__input"
					type="text"
					placeholder="Name"
					onChange={(e) => {
						setSearchQuery(e.target.value);
					}}
				/>
				<label className="search__bar__label" htmlFor="robot-search">
					Search robots by name
				</label>
			</div>

			<SearchResults>
				{filteredRobots(searchQuery).map(({ name, image, description, id }) => (
					<RobotCard
						key={id}
						name={name}
						image={image}
						description={description}
					/>
				))}
			</SearchResults>
		</div>
	);
};

export default Search;
