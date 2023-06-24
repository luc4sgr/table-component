import { Table } from "../global/Table";

interface DataProps {
  name: string;
  age: number;
  level: number;
}
const data: DataProps[] = [
  { name: "Lucas", age: 27, level: 2 },
  { name: "Alan", age: 30, level: 2 },
];

export function DevelopersTable() {
  const columns = [
    {
      title: "Engenheiro de Software",
      render: (record: DataProps) => record.name,
    },
    { title: "Idade", render: (record: DataProps) => record.age },
    { title: "Nível", render: (record: DataProps) => record.level },
  ];

  return <Table columns={columns} dataSource={data} />;
}
