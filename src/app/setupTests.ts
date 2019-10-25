import { configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
// import { expect } from 'chai';
// import sinon from 'sinon';

// global.sinon = sinon;
// global.expect = expect;

configure({ adapter: new EnzymeAdapter() });
