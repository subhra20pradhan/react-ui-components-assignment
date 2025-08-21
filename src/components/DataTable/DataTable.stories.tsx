import type { Meta, StoryObj } from "@storybook/react";
import { DataTable, Column } from "./DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const sampleData: User[] = [
  { id: 1, name: "Alice", email: "alice@test.com" },
  { id: 2, name: "Bob", email: "bob@test.com" },
  { id: 3, name: "Charlie", email: "charlie@test.com" },
];

const columns: Column<User>[] = [
  { key: "id", title: "ID", dataIndex: "id", sortable: true },
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: { data: sampleData, columns },
};

export const Selectable: Story = {
  args: { data: sampleData, columns, selectable: true },
};

export const Loading: Story = {
  args: { data: [], columns, loading: true },
};

export const Empty: Story = {
  args: { data: [], columns },
};
