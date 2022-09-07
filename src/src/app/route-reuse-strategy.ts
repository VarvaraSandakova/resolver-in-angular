import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  private acceptedRoutes: string[] = ["user/:id"];
  private storedRoutes = new Map<string, DetachedRouteHandle>();

// determines if this route (and its subtree) should be detached to be reused later.
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    // check to see if the route's path is in our acceptedRoutes array
    // @ts-ignore
    return this.acceptedRoutes.indexOf(route.routeConfig?.path) > -1;
  }

  // stores the detached route.
  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    // @ts-ignore
    this.storedRoutes.set(route?.routeConfig.path, handle);
  }

  // determines if this route (and its subtree) should be reattached.
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!route.routeConfig && !!this.storedRoutes.get(<string>route.routeConfig.path);
  }

  // retrieves the previously stored route.
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    // @ts-ignore
    return this.storedRoutes.get(route.routeConfig.path);
  }

// determines if a route should be reused.
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
