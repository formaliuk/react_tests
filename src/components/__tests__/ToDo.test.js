import {render, screen, cleanup} from '@testing-library/react';
import ToDo from '../ToDo';

afterEach(() => {
    cleanup();
});

test('should render non-completed todo', () => {
    const todo = {id: 1, title: 'wash dishes', completed: false};
    render(<ToDo todo={todo}/>);
    const todoEl = screen.getByTestId('todo-1');
    expect(todoEl).toBeInTheDocument();
    expect(todoEl).toHaveTextContent('wash dishes');
    expect(todoEl).not.toContainHTML('<div data-testid="todo-1"><strike><h1>wash dishes</h1></strike></div>');
})

test('should render completed todo', () => {
    const todo = {id: 2, title: 'wash car', completed: true};
    render(<ToDo todo={todo}/>);
    const todoEl = screen.getByTestId('todo-2');
    expect(todoEl).toBeInTheDocument();
    expect(todoEl).toHaveTextContent('wash car');
    expect(todoEl).toContainHTML('<div data-testid="todo-2"><strike><h1>wash car</h1></strike></div>');
})

test('should render completed todo', () => {
    const todo = {id: 3, title: 'cook dinner', completed: false};
    render(<ToDo todo={todo}/>);
    const todoEl = screen.getByTestId('todo-3');
    expect(todoEl).toBeInTheDocument();
    expect(todoEl).toHaveTextContent('cook dinner');
    expect(todoEl).not.toContainHTML('<div data-testid="todo-2"><strike><h1>cook dinner</h1></strike></div>');
})