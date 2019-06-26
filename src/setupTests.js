import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

//expectExport.addSnapshotSerializer(createSerializer({ mode: "deep" }));
configure({ adapter: new Adapter() });
