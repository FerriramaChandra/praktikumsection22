import { gql } from "@apollo/client";

export const GET_ANGGOTA = gql`
query MyQuery {
    Stasiun {
        id
        Umur
        Nama
        JenisKelamin
    }
}
`;

export const SEARCH_ANGGOTA_BY_ID = gql`
query MyQuery($id: Int!) {
    Stasiun_by_pk(id: $id) {
        id
        JenisKelamin
        Nama
        Umur
    }
}
`;
