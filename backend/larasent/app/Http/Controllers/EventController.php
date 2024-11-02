<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function sendMessage(Request $request)
    {
        $message = $request->input('message');

        // Memicu event MessageSent
        event(new MessageSent($message));

        return response()->json(['status' => 'Message sent successfully!']);
    }
}
