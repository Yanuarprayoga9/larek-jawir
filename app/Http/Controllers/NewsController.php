<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index(){
        $news = News::all();
        return Inertia::render('Homepage',[
            "title"=>"YanuNews",
            "description"=>"YanuNews adalah sebuah website yang menyediakan berita terkini dari berbagai sumber terpercaya",
            "news"=>$news
        ]);
    }
}
