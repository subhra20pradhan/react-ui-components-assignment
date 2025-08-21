import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "/Users/Pradh/ui-components-assignment/src/components/InputField/InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter username",
    helperText: "This is a helper text",
  },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter email",
    invalid: true,
    errorMessage: "Invalid email address",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: "Search",
    placeholder: "Loading...",
    loading: true,
  },
};

export const Variants: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    variant: "outlined", // try "filled" | "ghost"
  },
};

export const Sizes: Story = {
  args: {
    label: "Comment",
    placeholder: "Enter text",
    size: "lg", // try "sm" | "md" | "lg"
  },
};
