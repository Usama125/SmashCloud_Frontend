import axios from '../../axios';
import { trackPromise } from 'react-promise-tracker';

const TollTallApi = {
	entryPoint(body) {
		return trackPromise(axios.post("/enter", body));
	},
	exitPoint(body) {
		return trackPromise(axios.post("/exit", body));
	}
}

export default TollTallApi;