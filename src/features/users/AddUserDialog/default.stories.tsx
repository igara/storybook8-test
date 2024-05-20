import type { Meta, StoryObj } from '@storybook/react';
import { useAddUserDialog } from '@/features/users/AddUserDialog';
import React from 'react';
import { userEvent, within } from '@storybook/test';

const meta = {
  title: 'features/users/AddUserDialog',
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const _open: Story = {
  render: () => {
    const { AddUserDialog, handleDialogOpen } = useAddUserDialog();
    React.useEffect(() => {
      handleDialogOpen();
    }, []);

    return <AddUserDialog />;
  },
};

const InputPlay = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const storyBookRootCanvas = within(canvasElement);

  // await storyBookRootCanvas.findByText('SUBMIT');
  // await userEvent.click(storyBookRootCanvas.getByText('利用者情報追加'));

  const bodyElement = canvasElement.ownerDocument.body;
  const canvas = within(bodyElement);
  await canvas.findByText('Add User');

  let testElement = bodyElement.querySelector('input[name="name"]');
  testElement && (await userEvent.type(testElement, "A".repeat(30)));

  testElement = bodyElement.querySelector('input[name="age"]');
  testElement && (await userEvent.type(testElement, '100'));

  testElement = bodyElement.querySelector('textarea[name="description"]');
  testElement && (await userEvent.type(testElement, 'A'.repeat(100)));
};

export const _input: Story = {
  render: () => {
    const { AddUserDialog, handleDialogOpen } = useAddUserDialog();
    React.useEffect(() => {
      handleDialogOpen();
    }, []);

    return <AddUserDialog />;
  },
  play: async ({ canvasElement }) => {
    InputPlay({ canvasElement });
  },
};
