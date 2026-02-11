// api fetchen

const container = document.querySelector("header div");
const ids = [305, 321, 291];
const ul = document.querySelector("#meer-data ul");

apiKrijgen();

async function getPerson(id) {
	const url = `https://fdnd.directus.app/items/person/${id}`;
	const response = await fetch(url);
	const preData = await response.json();
	const data = preData.data;
	const customs = JSON.parse(data.custom);

	return { ...data, customs };
}

async function apiKrijgen() {
	const personen = await Promise.all(ids.map(getPerson));
	console.log(personen);

	const ik = personen.find((person) => person.id === 305);

	const mijnNaamH1 = `<h1>${ik.customs.spanName}</h1>`;
	container.insertAdjacentHTML("afterbegin", mijnNaamH1);

	personen.forEach((person) => {
		const li = document.createElement("li");

		const borderColor = person.fav_color ?? "var(--text-color)";
		const borderRadius = person.fav_border_radius ?? "20px";

		li.style.setProperty("--border-color", borderColor);
		li.style.setProperty("--border-radius", borderRadius);

		const foto = person.avatar ?? "images/geen-foto.png";
		const name = person.name;
		const nickname = person.nickname;
		const emoji = person.vibe_emoji ?? "❌";
		const tijd = person.customs.beginTime ?? "♾️";
		const procent = person.customs.ownStyle ?? "-10000";
		const seizoen = person.fav_season ?? "Antarctica";

		li.innerHTML = `<li>
                <img src="${foto}"alt="${name}">
                <div>
                <h4>${nickname} - ${emoji}</h4>
                <p>Hoeveel % is je website jouw stijl? </p>
                <p>${procent}%</p>
                <p>Hoe snel ben je begonnen?</p>
                <p>${tijd}</p>
                <p>Favoriete seizoen?</p>
                <p>${seizoen}</p>
                </div>
        </li>`;
		ul.appendChild(li);
	});
}

// rugzak openen
const rugzakKnop = document.querySelector("button:nth-of-type(1)");
const openRugzakKnop = document.querySelector("button:nth-of-type(2)");

rugzakKnop.addEventListener("click", rugzakOpenen);

function rugzakOpenen() {
	rugzakKnop.classList.add("hidden");
	openRugzakKnop.classList.remove("hidden");
}

// objecten uit rugzak halen
openRugzakKnop.addEventListener("click", objectenEruit);

function objectenEruit() {
	let volgendObject = document.querySelector(
		"button[data-class]:not([data-done])",
	);
	let object = volgendObject.dataset.class;

	volgendObject.dataset.done = object;
}

//dialog openen / sluiten
const alleSluitButtons = document.querySelectorAll("dialog button");
const alleObjecten = document.querySelectorAll("button[data-class]");

alleObjecten.forEach(function (object) {
	const dialog = object.nextElementSibling;
	object.addEventListener("click", () => {
		dialog.showModal();
	});

	const sluitButton = dialog.querySelector("button");
	sluitButton.addEventListener("click", () => {
		dialog.close();
	});
});

// dialog sluiten bij drukken a
const meerInfoLink = document.querySelector("dialog a");
const linkDialog = document.querySelector("dialog:last-of-type");
const meerData = document.querySelector("#meer-data");

meerInfoLink.addEventListener("click", closeDialog);

function closeDialog() {
	linkDialog.close();
	meerData.classList.remove("hidden-twee");
}
