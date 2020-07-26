import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Cars />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header><h2>Header</h2></header>
	);
}

function Footer() {
	return (
		<footer>Footer</footer>
		);
}

function Cars() {
	return (
		<main>
			<h1>Cars</h1>
			<section className="gallery">
				<Card img="http://africarm.org/site/wp-content/uploads/2013/07/Kantanka-onantefo.jpg" title="Kantanka" description="Kantanka Onantefo I, a 4×4 cross country vehicle" url="http://africarm.org/the-story-behind-kantanka-onantefo-1876/" />
				<Card img="https://st.motortrend.com/uploads/sites/5/2018/06/2018-Ferrari-812-Superfast-front-three-quarter-in-motion.jpg" title="Ferrari 812 Superfast" description="Some description" url="https://www.motortrend.com/news/2018-ferrari-812-superfast-first-test-review/" />
				<Card img="https://static.cargurus.com/images/site/2016/08/16/13/57/2017_cadillac_escalade-pic-1832549863046650222-1600x1200.jpeg" title="Cadillac Escalade" description="The Escalade is in its fourth generation, which arrived for the 2015 model year and is carried over for 2017. Last year, the SUV received the new corporate crest logo, giving it a more streamlined look. The Escalade rides on the GMT K2XX platform, which is shared with vehicles like the Chevy Silverado, Chevy Tahoe, GMC Sierra, and GMC Yukon. But despite its rugged, gruff DNA, the Escalade competes with the likes of the Mercedes-Benz GL-Class, Land Rover Range Rover, Infiniti QX80, and Lexus LX 570." url="https://www.cargurus.com/Cars/2017-Cadillac-Escalade-Overview-c26121" />
				<Card img="https://www.thetruthaboutcars.com/wp-content/uploads/2018/08/P90320402_highRes_rolls-royce-motor-ca-e1535722954787.jpg" title="Rolls-Royce Phantom" description="Are you tired of commoners gawking at you through the windows of your Rolls? Is your chauffeur too much of a peon with which to share time? Do you want to combine your desire for solitude with your love of spending house-sized money on a car? Well, fret no more.

Rolls-Royce has announced the introduction of a “Privacy Suite” for its Extended Wheelbase Phantom, a car exquisitely capable of delivering a crushing commentary on the inferiority of your neighbor’s bank statement.

Opting for the Privacy Suite cleaves the Phantom’s cabin in half with an vast slab of Electrochromatic Glass, a unit which allows the front and rear occupants to be visually separated at the touch of a button. The oligarch occupying the rear throne is offered the option to see through the glass and on to the road ahead or to instantly transform the glass to opaque." url="https://www.thetruthaboutcars.com/2018/08/block-out-peasants-with-your-rolls-royce-phantom/" />
				<Card img="https://hips.hearstapps.com/autoweek/assets/s3fs-public/kia-1_1.jpg" title="Kia Sportage 2020" description="The Kia Sportage is getting its first update since the current generation's debut for the 2017 model year, and it's a relatively subtle one. Unveiled this week at the Chicago Auto Show, the 2020 Kia Sportage boasts tweaked front and rear fascias and several pieces of new optional equipment." url="https://www.autoweek.com/news/auto-shows/a1716131/2020-kia-sportage-gets-sporty-refresh-chicago-auto-show/" />
				<Card img="https://st.motortrend.com/uploads/sites/5/2017/11/2019-Chevrolet-Corvette-ZR1-front-side-view-on-stage.jpg" title="Chevrolet Corvette ZR1" description="The Corvette ZR1 has finally been revealed, and as expected it's a numbers machine. We don't know everything about the ZR1 yet, but here are the most important figures released so far." url="https://www.motortrend.com/news/2019-chevrolet-corvette-zr1-by-the-numbers/" />
				<Card img="https://www.driving.co.uk/s3/st-driving-prod/uploads/2018/12/Jeremy-Clarkson-2018-lamborghini-Aventador-S-Roadster-Review-01.jpg" title="Lamborghini Aventador S Roadster" description="LAMBORGHINI appears to be in Jeremy Clarkson’s good books at the moment. So impressed was the Grand Tour host by the Huracán Performante, for example, he went as far to call it his favourite car of 2018." url="https://www.driving.co.uk/news/clarkson-lamborghini-aventador-s-roadster-worst-car-ive-driven-years/" />
				<Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg" title="Bugatti Veyron" description="The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Volkswagen Group and manufactured in Molsheim, France, by French automobile manufacturer Bugatti. It was named after the racing driver Pierre Veyron." url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg" />
				<Card img="https://1.bp.blogspot.com/-ciXdvWQVKCo/VB_2gZ2A1tI/AAAAAAAAGF8/05oR4YqMu6k/s1600/Mitsubishi-Outlander-PHEV-Concept-S-3.jpeg" title="Mitsubishi Outlander PHEV Concept-S" description="Japanese carmaker tugged the covers off a new PHEV Concept-S model with much improved looks." url="https://www.carscoops.com/2014/10/mitsubishis-new-outlander-phev-concept/" />
				<Card img="https://st.motortrend.com/uploads/sites/10/2018/02/2019-Subaru-Ascent-front-three-quarter-in-motion.jpg" title="Subaru Ascent" description="The 2019 Subaru Ascent is an all-new three-row crossover, replacing the long-discontinued Tribeca." url="https://www.motortrend.com/cars/subaru/ascent/2019/" />
				<Card img="https://st.motortrend.com/uploads/sites/5/2017/04/Toyota-FT-4X-Concept-front-side.jpg" title="Toyota FT-AC Concept" description="It's beginning to feel a lot like auto show season. Toyota is the latest automaker to issue a teaser image for a concept set to debut at the 2017 L.A. auto show this month. The shadowy image appears to show a rugged crossover vehicle wearing massive fender flares and plenty of LEDs." url="https://www.motortrend.com/news/toyota-ft-ac-concept-teased-ahead-of-l-a-debut/" />








<Card img="http://africarm.org/site/wp-content/uploads/2013/07/Kantanka-onantefo.jpg" title="Kantanka" description="Kantanka Onantefo I, a 4×4 cross country vehicle" url="http://africarm.org/the-story-behind-kantanka-onantefo-1876/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2018/06/2018-Ferrari-812-Superfast-front-three-quarter-in-motion.jpg" title="Ferrari 812 Superfast" description="Some description" url="https://www.motortrend.com/news/2018-ferrari-812-superfast-first-test-review/" />
<Card img="https://static.cargurus.com/images/site/2016/08/16/13/57/2017_cadillac_escalade-pic-1832549863046650222-1600x1200.jpeg" title="Cadillac Escalade" description="The Escalade is in its fourth generation, which arrived for the 2015 model year and is carried over for 2017. Last year, the SUV received the new corporate crest logo, giving it a more streamlined look. The Escalade rides on the GMT K2XX platform, which is shared with vehicles like the Chevy Silverado, Chevy Tahoe, GMC Sierra, and GMC Yukon. But despite its rugged, gruff DNA, the Escalade competes with the likes of the Mercedes-Benz GL-Class, Land Rover Range Rover, Infiniti QX80, and Lexus LX 570." url="https://www.cargurus.com/Cars/2017-Cadillac-Escalade-Overview-c26121" />
<Card img="https://www.thetruthaboutcars.com/wp-content/uploads/2018/08/P90320402_highRes_rolls-royce-motor-ca-e1535722954787.jpg" title="Rolls-Royce Phantom" description="Are you tired of commoners gawking at you through the windows of your Rolls? Is your chauffeur too much of a peon with which to share time? Do you want to combine your desire for solitude with your love of spending house-sized money on a car? Well, fret no more.

Rolls-Royce has announced the introduction of a “Privacy Suite” for its Extended Wheelbase Phantom, a car exquisitely capable of delivering a crushing commentary on the inferiority of your neighbor’s bank statement.

Opting for the Privacy Suite cleaves the Phantom’s cabin in half with an vast slab of Electrochromatic Glass, a unit which allows the front and rear occupants to be visually separated at the touch of a button. The oligarch occupying the rear throne is offered the option to see through the glass and on to the road ahead or to instantly transform the glass to opaque." url="https://www.thetruthaboutcars.com/2018/08/block-out-peasants-with-your-rolls-royce-phantom/" />
<Card img="https://hips.hearstapps.com/autoweek/assets/s3fs-public/kia-1_1.jpg" title="Kia Sportage 2020" description="The Kia Sportage is getting its first update since the current generation's debut for the 2017 model year, and it's a relatively subtle one. Unveiled this week at the Chicago Auto Show, the 2020 Kia Sportage boasts tweaked front and rear fascias and several pieces of new optional equipment." url="https://www.autoweek.com/news/auto-shows/a1716131/2020-kia-sportage-gets-sporty-refresh-chicago-auto-show/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2017/11/2019-Chevrolet-Corvette-ZR1-front-side-view-on-stage.jpg" title="Chevrolet Corvette ZR1" description="The Corvette ZR1 has finally been revealed, and as expected it's a numbers machine. We don't know everything about the ZR1 yet, but here are the most important figures released so far." url="https://www.motortrend.com/news/2019-chevrolet-corvette-zr1-by-the-numbers/" />
<Card img="https://www.driving.co.uk/s3/st-driving-prod/uploads/2018/12/Jeremy-Clarkson-2018-lamborghini-Aventador-S-Roadster-Review-01.jpg" title="Lamborghini Aventador S Roadster" description="LAMBORGHINI appears to be in Jeremy Clarkson’s good books at the moment. So impressed was the Grand Tour host by the Huracán Performante, for example, he went as far to call it his favourite car of 2018." url="https://www.driving.co.uk/news/clarkson-lamborghini-aventador-s-roadster-worst-car-ive-driven-years/" />
<Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg" title="Bugatti Veyron" description="The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Volkswagen Group and manufactured in Molsheim, France, by French automobile manufacturer Bugatti. It was named after the racing driver Pierre Veyron." url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg" />
<Card img="https://1.bp.blogspot.com/-ciXdvWQVKCo/VB_2gZ2A1tI/AAAAAAAAGF8/05oR4YqMu6k/s1600/Mitsubishi-Outlander-PHEV-Concept-S-3.jpeg" title="Mitsubishi Outlander PHEV Concept-S" description="Japanese carmaker tugged the covers off a new PHEV Concept-S model with much improved looks." url="https://www.carscoops.com/2014/10/mitsubishis-new-outlander-phev-concept/" />
<Card img="https://st.motortrend.com/uploads/sites/10/2018/02/2019-Subaru-Ascent-front-three-quarter-in-motion.jpg" title="Subaru Ascent" description="The 2019 Subaru Ascent is an all-new three-row crossover, replacing the long-discontinued Tribeca." url="https://www.motortrend.com/cars/subaru/ascent/2019/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2017/04/Toyota-FT-4X-Concept-front-side.jpg" title="Toyota FT-AC Concept" description="It's beginning to feel a lot like auto show season. Toyota is the latest automaker to issue a teaser image for a concept set to debut at the 2017 L.A. auto show this month. The shadowy image appears to show a rugged crossover vehicle wearing massive fender flares and plenty of LEDs." url="https://www.motortrend.com/news/toyota-ft-ac-concept-teased-ahead-of-l-a-debut/" />








<Card img="http://africarm.org/site/wp-content/uploads/2013/07/Kantanka-onantefo.jpg" title="Kantanka" description="Kantanka Onantefo I, a 4×4 cross country vehicle" url="http://africarm.org/the-story-behind-kantanka-onantefo-1876/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2018/06/2018-Ferrari-812-Superfast-front-three-quarter-in-motion.jpg" title="Ferrari 812 Superfast" description="Some description" url="https://www.motortrend.com/news/2018-ferrari-812-superfast-first-test-review/" />
<Card img="https://static.cargurus.com/images/site/2016/08/16/13/57/2017_cadillac_escalade-pic-1832549863046650222-1600x1200.jpeg" title="Cadillac Escalade" description="The Escalade is in its fourth generation, which arrived for the 2015 model year and is carried over for 2017. Last year, the SUV received the new corporate crest logo, giving it a more streamlined look. The Escalade rides on the GMT K2XX platform, which is shared with vehicles like the Chevy Silverado, Chevy Tahoe, GMC Sierra, and GMC Yukon. But despite its rugged, gruff DNA, the Escalade competes with the likes of the Mercedes-Benz GL-Class, Land Rover Range Rover, Infiniti QX80, and Lexus LX 570." url="https://www.cargurus.com/Cars/2017-Cadillac-Escalade-Overview-c26121" />
<Card img="https://www.thetruthaboutcars.com/wp-content/uploads/2018/08/P90320402_highRes_rolls-royce-motor-ca-e1535722954787.jpg" title="Rolls-Royce Phantom" description="Are you tired of commoners gawking at you through the windows of your Rolls? Is your chauffeur too much of a peon with which to share time? Do you want to combine your desire for solitude with your love of spending house-sized money on a car? Well, fret no more.

Rolls-Royce has announced the introduction of a “Privacy Suite” for its Extended Wheelbase Phantom, a car exquisitely capable of delivering a crushing commentary on the inferiority of your neighbor’s bank statement.

Opting for the Privacy Suite cleaves the Phantom’s cabin in half with an vast slab of Electrochromatic Glass, a unit which allows the front and rear occupants to be visually separated at the touch of a button. The oligarch occupying the rear throne is offered the option to see through the glass and on to the road ahead or to instantly transform the glass to opaque." url="https://www.thetruthaboutcars.com/2018/08/block-out-peasants-with-your-rolls-royce-phantom/" />
<Card img="https://hips.hearstapps.com/autoweek/assets/s3fs-public/kia-1_1.jpg" title="Kia Sportage 2020" description="The Kia Sportage is getting its first update since the current generation's debut for the 2017 model year, and it's a relatively subtle one. Unveiled this week at the Chicago Auto Show, the 2020 Kia Sportage boasts tweaked front and rear fascias and several pieces of new optional equipment." url="https://www.autoweek.com/news/auto-shows/a1716131/2020-kia-sportage-gets-sporty-refresh-chicago-auto-show/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2017/11/2019-Chevrolet-Corvette-ZR1-front-side-view-on-stage.jpg" title="Chevrolet Corvette ZR1" description="The Corvette ZR1 has finally been revealed, and as expected it's a numbers machine. We don't know everything about the ZR1 yet, but here are the most important figures released so far." url="https://www.motortrend.com/news/2019-chevrolet-corvette-zr1-by-the-numbers/" />
<Card img="https://www.driving.co.uk/s3/st-driving-prod/uploads/2018/12/Jeremy-Clarkson-2018-lamborghini-Aventador-S-Roadster-Review-01.jpg" title="Lamborghini Aventador S Roadster" description="LAMBORGHINI appears to be in Jeremy Clarkson’s good books at the moment. So impressed was the Grand Tour host by the Huracán Performante, for example, he went as far to call it his favourite car of 2018." url="https://www.driving.co.uk/news/clarkson-lamborghini-aventador-s-roadster-worst-car-ive-driven-years/" />
<Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg" title="Bugatti Veyron" description="The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Volkswagen Group and manufactured in Molsheim, France, by French automobile manufacturer Bugatti. It was named after the racing driver Pierre Veyron." url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg" />
<Card img="https://1.bp.blogspot.com/-ciXdvWQVKCo/VB_2gZ2A1tI/AAAAAAAAGF8/05oR4YqMu6k/s1600/Mitsubishi-Outlander-PHEV-Concept-S-3.jpeg" title="Mitsubishi Outlander PHEV Concept-S" description="Japanese carmaker tugged the covers off a new PHEV Concept-S model with much improved looks." url="https://www.carscoops.com/2014/10/mitsubishis-new-outlander-phev-concept/" />
<Card img="https://st.motortrend.com/uploads/sites/10/2018/02/2019-Subaru-Ascent-front-three-quarter-in-motion.jpg" title="Subaru Ascent" description="The 2019 Subaru Ascent is an all-new three-row crossover, replacing the long-discontinued Tribeca." url="https://www.motortrend.com/cars/subaru/ascent/2019/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2017/04/Toyota-FT-4X-Concept-front-side.jpg" title="Toyota FT-AC Concept" description="It's beginning to feel a lot like auto show season. Toyota is the latest automaker to issue a teaser image for a concept set to debut at the 2017 L.A. auto show this month. The shadowy image appears to show a rugged crossover vehicle wearing massive fender flares and plenty of LEDs." url="https://www.motortrend.com/news/toyota-ft-ac-concept-teased-ahead-of-l-a-debut/" />








<Card img="http://africarm.org/site/wp-content/uploads/2013/07/Kantanka-onantefo.jpg" title="Kantanka" description="Kantanka Onantefo I, a 4×4 cross country vehicle" url="http://africarm.org/the-story-behind-kantanka-onantefo-1876/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2018/06/2018-Ferrari-812-Superfast-front-three-quarter-in-motion.jpg" title="Ferrari 812 Superfast" description="Some description" url="https://www.motortrend.com/news/2018-ferrari-812-superfast-first-test-review/" />
<Card img="https://static.cargurus.com/images/site/2016/08/16/13/57/2017_cadillac_escalade-pic-1832549863046650222-1600x1200.jpeg" title="Cadillac Escalade" description="The Escalade is in its fourth generation, which arrived for the 2015 model year and is carried over for 2017. Last year, the SUV received the new corporate crest logo, giving it a more streamlined look. The Escalade rides on the GMT K2XX platform, which is shared with vehicles like the Chevy Silverado, Chevy Tahoe, GMC Sierra, and GMC Yukon. But despite its rugged, gruff DNA, the Escalade competes with the likes of the Mercedes-Benz GL-Class, Land Rover Range Rover, Infiniti QX80, and Lexus LX 570." url="https://www.cargurus.com/Cars/2017-Cadillac-Escalade-Overview-c26121" />
<Card img="https://www.thetruthaboutcars.com/wp-content/uploads/2018/08/P90320402_highRes_rolls-royce-motor-ca-e1535722954787.jpg" title="Rolls-Royce Phantom" description="Are you tired of commoners gawking at you through the windows of your Rolls? Is your chauffeur too much of a peon with which to share time? Do you want to combine your desire for solitude with your love of spending house-sized money on a car? Well, fret no more.

Rolls-Royce has announced the introduction of a “Privacy Suite” for its Extended Wheelbase Phantom, a car exquisitely capable of delivering a crushing commentary on the inferiority of your neighbor’s bank statement.

Opting for the Privacy Suite cleaves the Phantom’s cabin in half with an vast slab of Electrochromatic Glass, a unit which allows the front and rear occupants to be visually separated at the touch of a button. The oligarch occupying the rear throne is offered the option to see through the glass and on to the road ahead or to instantly transform the glass to opaque." url="https://www.thetruthaboutcars.com/2018/08/block-out-peasants-with-your-rolls-royce-phantom/" />
<Card img="https://hips.hearstapps.com/autoweek/assets/s3fs-public/kia-1_1.jpg" title="Kia Sportage 2020" description="The Kia Sportage is getting its first update since the current generation's debut for the 2017 model year, and it's a relatively subtle one. Unveiled this week at the Chicago Auto Show, the 2020 Kia Sportage boasts tweaked front and rear fascias and several pieces of new optional equipment." url="https://www.autoweek.com/news/auto-shows/a1716131/2020-kia-sportage-gets-sporty-refresh-chicago-auto-show/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2017/11/2019-Chevrolet-Corvette-ZR1-front-side-view-on-stage.jpg" title="Chevrolet Corvette ZR1" description="The Corvette ZR1 has finally been revealed, and as expected it's a numbers machine. We don't know everything about the ZR1 yet, but here are the most important figures released so far." url="https://www.motortrend.com/news/2019-chevrolet-corvette-zr1-by-the-numbers/" />
<Card img="https://www.driving.co.uk/s3/st-driving-prod/uploads/2018/12/Jeremy-Clarkson-2018-lamborghini-Aventador-S-Roadster-Review-01.jpg" title="Lamborghini Aventador S Roadster" description="LAMBORGHINI appears to be in Jeremy Clarkson’s good books at the moment. So impressed was the Grand Tour host by the Huracán Performante, for example, he went as far to call it his favourite car of 2018." url="https://www.driving.co.uk/news/clarkson-lamborghini-aventador-s-roadster-worst-car-ive-driven-years/" />
<Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg" title="Bugatti Veyron" description="The Bugatti Veyron EB 16.4 is a mid-engine sports car, designed and developed in Germany by the Volkswagen Group and manufactured in Molsheim, France, by French automobile manufacturer Bugatti. It was named after the racing driver Pierre Veyron." url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/1200px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%283%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg" />
<Card img="https://1.bp.blogspot.com/-ciXdvWQVKCo/VB_2gZ2A1tI/AAAAAAAAGF8/05oR4YqMu6k/s1600/Mitsubishi-Outlander-PHEV-Concept-S-3.jpeg" title="Mitsubishi Outlander PHEV Concept-S" description="Japanese carmaker tugged the covers off a new PHEV Concept-S model with much improved looks." url="https://www.carscoops.com/2014/10/mitsubishis-new-outlander-phev-concept/" />
<Card img="https://st.motortrend.com/uploads/sites/10/2018/02/2019-Subaru-Ascent-front-three-quarter-in-motion.jpg" title="Subaru Ascent" description="The 2019 Subaru Ascent is an all-new three-row crossover, replacing the long-discontinued Tribeca." url="https://www.motortrend.com/cars/subaru/ascent/2019/" />
<Card img="https://st.motortrend.com/uploads/sites/5/2017/04/Toyota-FT-4X-Concept-front-side.jpg" title="Toyota FT-AC Concept" description="It's beginning to feel a lot like auto show season. Toyota is the latest automaker to issue a teaser image for a concept set to debut at the 2017 L.A. auto show this month. The shadowy image appears to show a rugged crossover vehicle wearing massive fender flares and plenty of LEDs." url="https://www.motortrend.com/news/toyota-ft-ac-concept-teased-ahead-of-l-a-debut/" />
			</section>
		</main>
	);
}

function Card(props) {
	return (
		<div className="Card">
			<img className="card-img-top" src={props.img} />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.url} className="btn btn-primary">Details</a>
			</div>
		</div>
	);
}

export default App;
