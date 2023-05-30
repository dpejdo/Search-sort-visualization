import createArray from './createArray';
import createSpeed from './createSpeed';
import createFunction from './createFunction';
const factor = () => ({ ...createArray(), ...createSpeed(), ...createFunction() });

export default factor;
