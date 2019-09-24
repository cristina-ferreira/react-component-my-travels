import React, { Fragment} from 'react';
import Travel from "./Travel";

const travels = [
	{
		name: "London",
		country: "England",
		photoUrl: "https://cdn.londonandpartners.com/assets/73295-640x360-london-skyline-ns.jpg",
		distance: "1.585"
	},
	{
		name: "Paris",
		country: "France",
		photoUrl: "https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateParis_Heroshutterstock_112137761.jpg",
		distance: "1.453"
	},
	{
		name: "Rome",
		country: "Italy",
		photoUrl: "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Italy/Rome/rome-st-peters-basilica-guides.jpg?imwidth=450",
		distance: "1.862"
	}
]

const Travels = () => (
	<Fragment>
		{travels.map((travel) => (
			<Travel 
			key={travel.name} 
			name={travel.name} 
			country={travel.country} 
			photoUrl={travel.photoUrl} 
			distance={travel.distance}
			/>
		))}
	</Fragment>
);
export default Travels;