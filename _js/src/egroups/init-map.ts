import { Group } from './index';
import { toggleModal } from './toggle-modal';

export const initMap = (groups: Group[]) => () => {
	const bounds = new google.maps.LatLngBounds();

	const berlin = { lat: 52.52000659999999, lng: 13.404954 };

	const initState = {
		zoom: 10,
		center: berlin,
		disableDefaultUI: true,
		zoomControl: true,
	};

	const map = new google.maps.Map(document.getElementById('gmap')!, initState);

	// generate markers
	groups.forEach((group) => {
		const marker = new google.maps.Marker({
			position: group.pos,
			map: map,
		});

		const markerPosition = new google.maps.LatLng(group.pos.lat, group.pos.lng);
		bounds.extend(markerPosition);

		var infowindow = new google.maps.InfoWindow({
			content: '<strong>Name:</strong> ' + group.name + '<br><strong>Leiter:</strong> ' + group.leader,
		});

		google.maps.event.addListener(marker, 'click', function () {
			toggleModal(group.modalId, 'on');
		});
		google.maps.event.addListener(marker, 'mouseover', function () {
			infowindow.open(map, marker);
		});
		google.maps.event.addListener(marker, 'mouseout', function () {
			infowindow.close();
		});

		function showLocation() {
			toggleModal(group.modalId, 'off');
			map.setCenter(markerPosition);
			map.setZoom(13);
		}

		document.getElementById(`${group.locationId}-1`)!.addEventListener('click', showLocation);
		document.getElementById(`${group.locationId}-2`)!.addEventListener('click', showLocation);
	});

	map.fitBounds(bounds);

	function centerMap() {
		map.fitBounds(bounds);
	}

	(document.getElementById('center-map') as HTMLButtonElement).addEventListener('click', function () {
		centerMap();
		return false;
	});
};
