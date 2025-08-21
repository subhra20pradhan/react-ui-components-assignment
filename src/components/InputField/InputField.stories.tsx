import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["filled", "outlined", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    type: { control: "select", options: ["text", "password"] },
  },
};
export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your name",
    helperText: "This is a helper text",
    variant: "outlined",
    size: "md",
  },
};

export const Error: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Invalid email address",
    variant: "filled",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Field",
    placeholder: "Can't type here",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    variant: "outlined",
  },
};

export const Loading: Story = {
  args: {
    label: "Search",
    placeholder: "Loading...",
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
