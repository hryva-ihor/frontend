const DAYS = ['Monday', "Tuesday", "Wednesday", "Thursday", "Friday"];
let [Monday, Tuesday, Wednesday, Thursday, Friday] = DAYS;

const ROOMS = {
	Red: {
		hours: {
			start: 10,
			end: 19
		},
		days: [Monday, Tuesday, Wednesday, Friday]
	},
	Green: {
		hours: {
			start: 11,
			end: 17
		},
		days: [Tuesday, Thursday, Friday]
	}
}

const Participants = ['Igor', 'Nina', 'Vladimir', 'Anna'];

const meetForm = document.querySelector(`#meetForm`);
const meetRoom = document.querySelector(`select[data-id="meetRoom"]`);
const meetHours = document.querySelector(`select[data-id="meetHours"]`);
const meetDays = document.querySelector(`select[data-id="meetDays"]`);

const getRoomHours = roomName => {
	let hours = [],
		start = ROOMS[roomName].hours.start,
		end = ROOMS[roomName].hours.end;

	for(; start<=end; start++){
		hours.push(start);
	}

	return hours;
}

const getRoomDays = roomName => ROOMS[roomName].days;

const generateOptions = (el, func, room, itemView="") => {
	 el.innerHTML = func(room).map(item => `<option value="${item}">${item}${itemView}</option>`);
}

for(let key in ROOMS){
	meetRoom.innerHTML += `<option value="${key}">${key}</option>`;
}

generateOptions(meetHours, getRoomHours, meetRoom.value, ":00");
generateOptions(meetDays, getRoomDays, meetRoom.value);

meetRoom.addEventListener(`change`, ()=>{
	generateOptions(meetHours, getRoomHours, meetRoom.value, ":00");
	generateOptions(meetDays, getRoomDays, meetRoom.value);
})


meetForm.addEventListener(`submit`, e=>{
	e.preventDefault();

	let meetName = e.target.querySelector(`input[data-id="meetName"]`).value,
		meetParticipants = [...e.target.querySelector(`select[data-id="meetParticipants"]`).selectedOptions],
		room = meetRoom.value,
		hours = meetHours.value,
		days = meetDays.value;

	meetParticipants = meetParticipants.map(option => option.value);

	let meet = {
		name: meetName,
		room: room,
		participants: meetParticipants,
		hours: hours,
		days: days
	}

	let userNotExist = true;

	let storageParticipants = localStorage.getItem(`participants`) ? JSON.parse(localStorage.getItem(`participants`)) : {};

	meetParticipants.forEach(user => {
		if(storageParticipants[user]){
			let userCalendar = storageParticipants[user];
			let userInMeet = userCalendar.find(meet => meet.day === days && meet.hour == hours && meet.room == room);

			if(userInMeet){
				alert(`${user} already in meet at ${room} ${hours}:00 ${days}.`);
				userNotExist = false;
			} else{
				storageParticipants[user].push({hour: hours, day: days, room: room});
			}

		} else{
			storageParticipants[user] = [{hour: hours, day: days, room: room}]
		}
	})

	if(userNotExist){
		localStorage.setItem(`participants`, JSON.stringify(storageParticipants));

		let storageRooms = localStorage.getItem(`rooms`) ? JSON.parse(localStorage.getItem(`rooms`)) : {};
		let storageRoom;
		
		if(storageRooms[room]){
			if(storageRooms[room].find(storageMeet => storageMeet.hours === hours && storageMeet.days === days)){
				alert(`Meet at ${hours}:00 in ${days} already exist!`);
			} else{
				storageRoom = storageRooms[room];
				storageRoom.push(meet);
			}
		} else{
			storageRooms[room] = [meet];
		}

		localStorage.setItem(`rooms`, JSON.stringify(storageRooms));
	}
})

// TABLES
const meetTables = document.querySelector(`#meetTables`);

const renderTable = () => {
	let storage = localStorage.getItem(`rooms`) ? JSON.parse(localStorage.getItem(`rooms`)) : {};

	for(let room in storage){
		let table = document.createElement(`table`);
		table.innerHTML = `<caption>${room} meeting room</caption>
		<thead>
			<tr>
				<th>Hours</th>
				${getRoomDays(room).map(day => `<th>${day}</th>`).join(``)}
			</tr>
		</thead>
		<tbody>
			${getRoomHours(room).map(hour => `<tr>
					<td>${hour}:00</td>
					${getRoomDays(room).map(day => `<td data-day="${day}" data-hour="${hour}"></td>`).join(``)}
				</tr>`).join(``)}
		</tbody>`;

		meetTables.append(table);
	}
};

renderTable();
