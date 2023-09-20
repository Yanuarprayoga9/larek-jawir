<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NewsController extends Controller
{
    public function index(){
        $news = new NewsCollection(News::paginate(10));
        return Inertia::render('Homepage',[
            "title"=>"YanuNews",
            "description"=>"YanuNews adalah sebuah website yang menyediakan berita terkini dari berbagai sumber terpercaya",
            "news"=>$news
        ]);
    }

    public function store(Request $request){
        // $news = 
        // $data =  [
        //     'title'=>$request->title,
        //     'description'=>$request->description,
        //     'category'=>$request->category,
        //     'author'=>Auth::user()->name,
        // ];
        
        // $process =  News::create($data);
        // if($process){
        // }
        $validated = $request->validate([
            'title' => 'required|unique:news|max:255',
            'description' => 'required',
            'category' => 'required',
            'author' => 'required',
        ]);
        dd($validated);
        // News::create($validated);
        // $news = new News();
        // $news->title = $request->title;
        // $news->description = $request->description;
        // $news->category = $request->category;
        // $news->author = Auth::user()->name;
        // $news->save();

        // return redirect()->back()->with('success','Berita berhasil ditambahkan');

       
        
    }
}
