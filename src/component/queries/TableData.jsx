//Apollo client
import { useQuery } from '@apollo/client';

//Query
import { GET_ANGGOTA, GET_KETERANGAN } from './query';

const TableData = () => {
    const {data, loading, error} = useQuery(GET_KETERANGAN, GET_ANGGOTA);
    console.log({data, loading, error});
    <div>
        <thead>
            <tr>
                <th>ID Anggota</th>
                <th>Nilai</th>
                <th>Pelajaran</th>
            </tr>
        </thead>
        <tbody>
            {data.keterangan.map((keterangan, keteranganIdx) => (
                <tr key={keteranganIdx}>
                    <td>{keterangan.id_anggota}</td>
                    <td>{keterangan.Nilai}</td>
                    <td>{keterangan.Pelajaran}</td>
                </tr>
                ))
            }
        </tbody>
    </div>
}
export default TableData