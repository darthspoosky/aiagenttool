import { render, screen, fireEvent } from '@testing-library/react';
import AnnouncementBar from './AnnouncementBar';

describe('AnnouncementBar', () => {
  it('renders message and correct variant', () => {
    render(<AnnouncementBar message="Test announcement" variant="success" />);
    expect(screen.getByText('Test announcement')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveClass('success');
  });

  it('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<AnnouncementBar message="Closable" onClose={handleClose} />);
    fireEvent.click(screen.getByLabelText(/close announcement/i));
    expect(handleClose).toHaveBeenCalled();
  });
});
