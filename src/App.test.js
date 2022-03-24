import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import App from './App';
// test('renders a snapshot', () => {
//   const tree = renderer.create(<App/>).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('renders text GitHub', () => {
  render(<App />)
  const nameElement = screen.getByText(/github/i)
  expect(nameElement).toBeInTheDocument()
});















// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
