import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { addTodo } from '../store/action';

configure({ adapter: new Adapter() })
const ADD_TODO = addTodo().type

describe('Action test', () => {
    it('tests the addTodo()', () => {

        expect(addTodo).toEqual(addTodo)
    })
});
