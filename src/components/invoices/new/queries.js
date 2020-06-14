import { gql } from "apollo-boost";

export const SEARCH_CLIENT = gql`
	query SearchClient($query: String!) {
		searchClient(query: $query) {
			id
			firstName
			lastName
			email
			phoneNumber
			physicalAddress
			billingAddress
		}
	}
`;

export const GET_DOG_PHOTO = gql`
	query Dog($breed: String!) {
		dog(breed: $breed) {
			id
			displayImage
		}
	}
`;
