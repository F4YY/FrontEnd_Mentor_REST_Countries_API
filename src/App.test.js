import { render, screen } from '@testing-library/react';
import RestAPIcountries from './components/RestAPIcountries';
import userEvent from '@testing-library/user-event';
import { fireEvent } from '@testing-library/react';

// test('renders the search input correctly', () => {
//   render(<RestAPIcountries />);
//   expect(screen.getByPlaceholderText('Search for a country...')).toBeInTheDocument();
//   expect(screen.getByPlaceholderText('Search for a country...')).toHaveValue('');
// });

describe('RestAPIcountries', () => {
  // test('renders the theme toggle button correctly', () => {
  //   render(<RestAPIcountries />);
  //   const toggleButton = screen.getByText(/Dark Mode/i);
  //   expect(toggleButton).toBeInTheDocument();

  //   // Simulate a click event on the toggle button
  //   userEvent.click(toggleButton);

  //   // Add assertions to check if the theme state is updated correctly
  // });

  // Add more test cases for other components or functionality
  it('updates the searchTerm state correctly when handleSearch is called', () => {
    render(<RestAPIcountries />);
    const searchInput = screen.getByPlaceholderText('Search for a country...');

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });
});