// vendors
import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// config
import { ErrorMessages } from '@/config/constants';

// components
import EventForm from '@/components/EventForm';

const eventTest = {
  name: 'My super event',
  description: 'This is my awesome event',
  startDate: '2023-09-07T20:00',
  endDate: '2023-09-09T08:00',
};

jest.mock('next/router', () => require('next-router-mock'));

describe('EventForm tests', () => {
  it('should submit with valid user inputs', async () => {
    const handleSubmit = jest.fn();

    render(<EventForm onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    const name = screen.getByLabelText(/name/i);
    const description = screen.getByLabelText(/description/i);
    const startDate = screen.getByLabelText(/begins/i);
    const endDate = screen.getByLabelText(/ends/i);
    const submitButton = screen.getByRole('button', { name: /confirm/i });

    await user.type(name, eventTest.name);
    await user.type(description, eventTest.description);
    await user.type(startDate, eventTest.startDate);
    await user.type(endDate, eventTest.endDate);

    await user.click(submitButton);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        name: eventTest.name,
        description: eventTest.description,
        startDate: new Date(eventTest.startDate).toISOString(),
        endDate: new Date(eventTest.endDate).toISOString(),
      });
    });
  });

  it('should failed on submit when required fields are dirty', async () => {
    const promise = Promise.resolve();
    const handleSubmit = jest.fn(() => promise);

    render(<EventForm onSubmit={handleSubmit} />);

    const user = userEvent.setup();

    const submitButton = screen.getByRole('button', { name: /confirm/i });

    await user.click(submitButton);

    expect(
      await screen.findByText(ErrorMessages.event.name.required)
    ).toBeVisible();
    expect(
      await screen.findByText(ErrorMessages.event.description.required)
    ).toBeVisible();
    expect(
      await screen.findByText(ErrorMessages.event.startDate.required)
    ).toBeVisible();
    expect(
      await screen.findByText(ErrorMessages.event.endDate.required)
    ).toBeVisible();

    await act(() => promise);
  });

  it('should failed on blur when entered name is under min characters limit', async () => {
    const handleSubmit = jest.fn();

    render(<EventForm onSubmit={handleSubmit} />);

    const name = screen.getByLabelText(/name/i);

    const user = userEvent.setup();
    await user.type(name, 'a');

    act(() => {
      name.blur();
    });

    expect(await screen.findByText(ErrorMessages.event.name.min)).toBeVisible();
  });

  it('should failed on blur when entered name is over max characters limit', async () => {
    const handleSubmit = jest.fn();

    render(<EventForm onSubmit={handleSubmit} />);

    const name = screen.getByLabelText(/name/i);

    const user = userEvent.setup();
    await user.type(name, 'WjngDKE59q2l6brOV5EiuARLRkYGV35Amu');

    act(() => {
      name.blur();
    });

    expect(await screen.findByText(ErrorMessages.event.name.max)).toBeVisible();
  });

  it('should failed on blur when entered description is under min characters limit', async () => {
    const handleSubmit = jest.fn();

    render(<EventForm onSubmit={handleSubmit} />);

    const description = screen.getByLabelText(/description/i);

    const user = userEvent.setup();
    await user.type(description, 'a');

    act(() => {
      description.blur();
    });

    expect(
      await screen.findByText(ErrorMessages.event.description.min)
    ).toBeVisible();
  });

  it('should failed on blur when entered description is over max characters limit', async () => {
    const handleSubmit = jest.fn();

    render(<EventForm onSubmit={handleSubmit} />);

    const description = screen.getByLabelText(/description/i);

    const user = userEvent.setup();
    await user.type(
      description,
      'DR2KncuPejznnwTPOW6pHaBxQxbTt5MkfWR4icOX3Zyktf3l8yoEGhwW2FUGp3YBobRCYgarG2FovGbVGSTxUymW6SmuM3VoVZwOVg2MFKQ5fqewU369q10SoSWU7sgI2821ZqEK8cKOVEXB89booUPqyEbpNED4EGgbzWmkkv9BzaxwuXZR0uLQMnQRz1c6bsluFJgRF75WW3ZHZ9qONchTsEspf24guIlR11YZi8NAsVGnHxOSCWtbIO6iCtZ'
    );

    act(() => {
      description.blur();
    });

    expect(
      await screen.findByText(ErrorMessages.event.description.max)
    ).toBeVisible();
  });

  it('should failed on blur when entered start date is sooner than current date', async () => {
    const handleSubmit = jest.fn();

    render(<EventForm onSubmit={handleSubmit} />);

    const startDate = screen.getByLabelText(/begins/i);

    const user = userEvent.setup();
    await user.type(startDate, '1985-10-26T20:00');

    act(() => {
      startDate.blur();
    });

    expect(
      await screen.findByText(ErrorMessages.event.startDate.min)
    ).toBeVisible();
  });

  it('should failed on blur when entered end date is sooner than entered start date', async () => {
    const handleSubmit = jest.fn();

    render(<EventForm onSubmit={handleSubmit} />);

    const startDate = screen.getByLabelText(/begins/i);
    const endDate = screen.getByLabelText(/ends/i);

    const user = userEvent.setup();
    await user.type(startDate, '2023-06-19T20:00');
    await user.type(endDate, '2023-03-07T08:00');

    act(() => {
      endDate.blur();
    });

    expect(
      await screen.findByText(ErrorMessages.event.endDate.greaterThan)
    ).toBeVisible();
  });
});
