import { cityResolver } from "./cityResolver";
import { launchResolver } from "./launchResolver";
import { launchesResolver } from "./launchesResolver";
import { rocketResolver } from "./rocketResolver";
import { rocketsResolver } from "./rocketsResolver";

export const resolvers = {
  Launchpad: {
    city: async (parent: any, args: any, context: any, info: any) => {
      return await fetch(`https://api.geodatasource.com/city?key=50QWVCVPE7ID8PGZNTUPYTKBPANQ5BTH&format=json&lat=${parent.latitude}&lng=${parent.longitude}`).then((res) => res.json());
    }
  },
  Query: {
    launches: launchesResolver,
    launch: launchResolver,
    rockets: rocketsResolver,
    rocket: rocketResolver,
    city: cityResolver,
  },
};
