//ApolloClient
import { useQuery, useLazyQuery } from '@apollo/client';

//Query
import { GET_ANGGOTA, SEARCH_ANGGOTA_BY_ID } from './queries/query';


const ListPassenger = () => {

    const {data, loading, error} = useQuery(GET_ANGGOTA);
    console.log({data, loading, error});

    const [SearhById, {data: dataLazy, loading: loadingLazy}] = useLazyQuery(SEARCH_ANGGOTA_BY_ID);

    const onChangeLazy = (e) => {
        setId(e.target.value)
    };

    return (
        <div>
            {
                loading ?
                (
                    <h1>Loading</h1>
                )
                :
                <table cellPadding="5px" cellSpacing="0" style={{margin: "auto"}}>
                    <thead bgcolor="red">
                        <tr>
                            <td>Nama</td>
                            <td>Umur</td>
                            <td>Jenis Kelamin</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.Stasiun.map((anggota, anggotaIdx) => (
                                <tr key={anggotaIdx}>
                                    <td>{anggota.Nama}</td>
                                    <td>{anggota.Umur}</td>
                                    <td>{anggota.JenisKelamin}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <div>
                        <input type="text" placeholder="Masukkan Nama ..." onChange={onChangeLazy}/>
                    </div>
                </table>
            }
        </div>
    )
}

export default ListPassenger;