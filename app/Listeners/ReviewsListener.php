<?php

namespace App\Listeners;

use App\Events\ReviewsEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class ReviewsListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(ReviewsEvent $event)
    {
        if(!session()->has('isViewed')){
            $this->updateViewers($event->product);
        }
        else {
            return false;
        }
    }

    public function updateViewers($product){
        $product->Reviews = $product->Reviews +1;
        $product->save();
        session()->put(['isViewed' => $product->id]);
    }
}
