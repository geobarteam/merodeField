import { Subscription } from '../areaselector/model'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SubscriptionService {
    private subscriptionUrl = 'app/subscriptions';  // URL to web API
    constructor(private http: Http) { }

    getSubscriptions(): Promise<Subscription[]> {
        return this.http.get(this.subscriptionUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    addSubscription(subscription: Subscription):Promise<Subscription> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.subscriptionUrl, subscription, options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}


