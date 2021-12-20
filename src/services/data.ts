import {
  Client,
  Get,
  Collection,
  Documents,
  Lambda,
  Map,
  Paginate,
} from "faunadb";

const DOCUMENT_NAME = "domains";

const client = new Client({
  secret: "fnAEa5PC0xAAQGYiXQRoGgW1gC7bl7PZKBaThle8",
  domain: "db.us.fauna.com",
});

export async function getDomainList() {
  try {
    const q = await client.query<{ data: any }>(
      Map(
        Paginate(Documents(Collection(DOCUMENT_NAME))),
        Lambda((x) => Get(x))
      )
    );
    return q.data;
  } catch (e) {
    console.log(JSON.stringify(e));
  }
}

export async function getDomainDetails(domain: string) {
  try {
    const q = await client.query<{ data: any }>(
      Map(
        Paginate(Documents(Collection(DOCUMENT_NAME))),
        Lambda((x) => Get(x))
      )
    );
    return q.data;
  } catch (e) {
    console.log(JSON.stringify(e));
  }
}

export async function insertDomainDetails(data: any) {
  try {
    const q = await client.query<{ data: any }>(
      Map(
        Paginate(Documents(Collection(DOCUMENT_NAME))),
        Lambda((x) => Get(x))
      )
    );
    return q.data;
  } catch (e) {
    console.log(JSON.stringify(e));
  }
}

/**
 * test run for standalone execution
 * @param {string} domain
 */
const run = async () => {
  const res = await getDomainList();
  console.log(res.map((x: any) => x.data.domainName));
};
