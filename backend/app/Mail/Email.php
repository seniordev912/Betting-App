<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class Email extends Mailable {

    use Queueable,
        SerializesModels;
    public function __construct($view, $subject, $params)
    {
        $this->view = $view;
        $this->subject = $subject;
        $this->params = $params;
    }
    //build the message.
    public function build() {
        return $this->from(env('MAIL_FROM_ADDRESS'))
            ->view($this->view, $this->params)
            ->subject($this->subject);
    }
}
