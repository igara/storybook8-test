import { ResponseData, User } from '@/app/api/users/route';
import { http, HttpResponse, delay } from 'msw';

export const sampleUser: User = {
  id: 1,
  name: `User 1`,
  age: 20,
  description: `This is user 1`
};

export const sampleUsers100: User[] = [...Array(100)].map((_, i) => {
  const index = i + 1;
  return {
    id: index,
    name: `User ${index}`,
    age: 20,
    description: `This is user ${index}`
  };
});

export const loadingGetUsersAPIMock = () => {
  return http.get(
    "/api/users",
    async () => {
      await delay(60000);
      const response: ResponseData = {
        message: 'OK',
        users: [],
      };

      return HttpResponse.json(response, {
        status: 200,
      });
    },
  );
};

export const errorGetUsersAPIMock = () => {
  return http.get(
    "/api/users",
    async () => {
      const response: ResponseData = {
        message: 'Internal Server Error',
        users: [],
      };

      return HttpResponse.json(response, {
        status: 500,
      });
    },
  );
};

export const loadedGetUsers0APIMock = () => {
  return http.get(
    "/api/users",
    async () => {
      const response: ResponseData = {
        message: 'OK',
        users: [],
      };

      return HttpResponse.json(response, {
        status: 200,
      });
    },
  );
};

export const loadedGetUsers1APIMock = () => {
  return http.get(
    "/api/users",
    async () => {
      const response: ResponseData = {
        message: 'OK',
        users: [sampleUser],
      };

      return HttpResponse.json(response, {
        status: 200,
      });
    },
  );
};

export const loadedGetUsers100APIMock = () => {
  return http.get(
    "/api/users",
    async () => {
      const response: ResponseData = {
        message: 'OK',
        users: sampleUsers100,
      };

      return HttpResponse.json(response, {
        status: 200,
      });
    },
  );
};
