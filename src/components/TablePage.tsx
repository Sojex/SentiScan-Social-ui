import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { ModuleRegistry } from 'ag-grid-community';
import { AllCommunityModule } from 'ag-grid-community';



import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { SentiScanMessage } from './model';
import { webApiService } from './web-api-service';


ModuleRegistry.registerModules([AllCommunityModule]);

export default function TablePage() {
  const [rowData, setRowData] = useState<SentiScanMessage[]>([]);

  const columnDefs: ColDef<SentiScanMessage>[] = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'SenderId', field: 'senderId' },
    { headerName: 'ReceiverId', field: 'receiverId' },
    { headerName: 'Message', field: 'messageContent' },
  ];

  const defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await webApiService.getAllMessages();
        console.log('Fetched data:', data);
        setRowData(data);
      } catch (err) {
        console.error('Error fetching messages:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
      <AgGridReact<SentiScanMessage>
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        modules={[AllCommunityModule]}
      />
    </div>
  );
}
