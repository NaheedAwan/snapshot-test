import GitHubCard from './GitHubCard'
import renderer from 'react-test-renderer'

// test('renders a snapshot', () => {
//   const tree = renderer.create(<GitHubCard />).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('renders text GitHub', () => {
    render(<App />)
    const nameElement = screen.getByText(/github/i)
    expect(nameElement).toBeInTheDocument()
  });
  