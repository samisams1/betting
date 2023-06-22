import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';
import { join } from 'path';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => ({ req, res }),
      installSubscriptionHandlers: true,
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      },
      debug: true,
      introspection: true,
      playground: true,
      cors: {
        credentials: true,
        origin: true,
      },
    };
  }
}
