```
const Table = require('reactabular-table');
const rows = [
    {
        id: 1,
        name: 'Loki',
    },
];
const columns = [
  {
    property: 'name',
    header: {
      label: 'Name',
    },
    cell: {
        transforms: [a => ({
            children: a,
        })],
    },
  },
];
<Table.Provider columns={columns}>
  <Table.Header />
  <Table.Body rows={rows} rowKey="id" />
</Table.Provider>
```
