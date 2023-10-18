/* eslint-disable no-shadow */

export enum ROUTE {
  LANDING = "/",
  FEATURES = "/features",
  RESOURCES = "/resources",
  PRODUCTS = "/products",
  BLOG = "/blog",
  PRICING = "/pricing/",
  CONTACT = "/contact/",
  UPLOADNEW = "/upload-new/",
  LOGIN = "/login",
  SIGNUP = "/signup",
  FORGOT_PASSWORD = "/forgot-password",
  USER_DASHBOARD = "/userDashboard/*",
  APPLICATION_PROC = "/apply/:id",
  COMPLETE_APPLICATION = "/apply/:jobId/:formData",
  APPLICATION_DONE = "/apply/done",
  SEARCH = "/search/:searchTerm",
  EXPANDED_JOB = "/job/:jobParams",
  EXPANDED_INTERNSHIP = "/intern/:internParams",
}

export enum USER_PROFILE_ROUTE {
  USER_ACTIVITY = "activities/:activityId/",
  CONTACT = "/contact/",
}

/**
 * All the Routes inside dashboard
 */
export enum USER_DASHBOARD_ROUTE {
  USER_DEPOSIT = "*/deposit",
  USER_ECOMMERCE = "*/ecommerce",
  USER_Withdraw = "*/Withdraw",
  USER_GENEALOGY = "*/genealogy",
  USER_REFERRAL = "*/referral",
  USER_SUPPORT = "*/support",
  USER_PAYOUT = "*/payout",
  DEFAULT = "*",
}

/**
 * All the Routes inside dashboard IN DASHBOARD
 */
export enum IN_DASHBOARD_ROUTE {
  USER_ACTIVITY = "*/activity",
  USER_EXTERNAL = "*/external",
  USER_NEWS = "*/news",
  DEFAULT = "*",
}
type TArgs =
  | { path: ROUTE.LANDING }
  | { path: ROUTE.RESOURCES }
  | { path: ROUTE.BLOG }
  | { path: ROUTE.FEATURES }
  | { path: ROUTE.PRODUCTS }
  | { path: ROUTE.LOGIN }
  | { path: ROUTE.SIGNUP }
  | { path: ROUTE.PRICING; params: { userId: string } }
  | {
      path: ROUTE.CONTACT;
      params: { userId: string; activityId: string };
    }
  | {
      path: USER_PROFILE_ROUTE.CONTACT;
      params: { activityId: string };
    }
  | {
      path: ROUTE.APPLICATION_PROC;
      params: { jobId: string };
    }
  | {
      path: ROUTE.COMPLETE_APPLICATION;
      params: { jobId: string; formData: string };
    }
  | {
      path: ROUTE.SEARCH;
      params: { searchTerm: string };
    }
    | {
      path: ROUTE.APPLICATION_PROC;
      params: { id: string };
    }
  | {
      path: ROUTE.EXPANDED_JOB;
      params: { jobParams: string };
    };

type TArgsWithParams = Extract<TArgs, { path: any; params: any }>;

export function createPath(args: TArgs) {
  // Save some CPU power for routes without params
  const events = { params: false };
  const key = "params";
  if (args.hasOwnProperty.call(events, key)) return args.path;

  // Create a path by replacing params in the route definition
  return Object.entries((args as TArgsWithParams).params).reduce(
    (previousValue: string, [param, value]) =>
      previousValue.replace(`:${param}`, `${value}`),
    args.path
  );
}
