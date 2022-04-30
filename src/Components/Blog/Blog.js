import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="min-h blog mt-5 mb-5">
      <span className="text-white my-5">.</span>
      <h2 className="text-center my-5"> Here Is Your Answere</h2>
      <div className="row  ms-0  mt-5 mt-md-0 px-2 mb-5">
        <div className="col-11 col-lg-8  w-lg-75 mx-auto">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
              Difference between javascript and nodejs
              </Accordion.Header>
              <Accordion.Body>
                <div className="row">
                  <div className="col-6">
                    <p className="mt-2">Authentication:</p>
                    <p className="my-2">
                      Authentication হলো একটি নেটওয়ার্কে বা সিস্টেমে ইউজারকে
                      সনাক্তকরন এর একটি মাধ্যম । অনেক সাইটে প্রবেশের জন্য
                      ইউজারের পরিচয় নিয়ে তাকে প্রবেশ করতে দেয়া হয়। কয়েক ভাবে এই
                      কাজ করা যায় যেমন : নাম, পাসওয়ার্ড, ইমেইল।
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="mt-2">Authorization:</p>
                    <p className="my-2">
                      Authorization হলো নিজের ইমেইল বা পাসওয়ার্ড না দিয়ে থার্ড
                      পার্টির রেফারেন্স ব্যবহার করে নিজের পরিচয় প্রদান করা। এতে
                      করে থার্ড পার্টি ভেরিফাই করে উক্ত সাইটে লগিন করতে সহায়তা
                      করে। এগুলো হলো : গুগল, গিট হাব, ফেইসবুক, মাইক্রোসফট
                      ইত্যাদি
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
              Differences between sql and nosql databases.
                authentication?
              </Accordion.Header>
              <Accordion.Body>
                <p className="my-2">
                   ফায়াবেজ আমাদের অনেক সার্ভিস প্রদান করে থাকে। ফায়ারবেজ খুব সহজেই ব্যবহার করা যায় । 
                   ফায়ারবেজ গুগলের স্টোরেজ সিস্টেম। এটি সহজ হওয়ার পাশাপাশি ওনেক সিকিউরিটিও প্রদান করে থাকে।  যার ফলে আমি ফায়ারবেজ ব্যবহার করি <br />

                </p>
                <p>
                ফায়াবেজ ছাড়াও আরো অনেক উপায়ে authentication করা সম্ভব।
                <ul>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Flutter</li>
                    <li>LoopBack</li>
                    <li>RxDB</li>
                </ul>
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
              What is the purpose of jwt and how does it work?
              </Accordion.Header>
              <Accordion.Body>
              <p className="my-2">
                  ফায়ারবেজ হলো ক্লাউড স্টোরেজ সিস্টেম। ফায়াবেজ আমাদের অনেক
                  সার্ভিস প্রদান করে থাকে। এখনে আমরা আমাদের লাইভ সাইট ও সাইটের
                  সকল ডাটা স্টোর করে রাখতে পারি। এটি রিমোট ডাটাবেজ যার ফলে
                  যেকোনো ডিভাইস থেকে ব্যবহার করা যায়।  ফায়ারবেজ খুব
                  সহজেই ব্যবহার করা যায় । এখানে সকল রিয়েলটাইম ডাটা নিয়ে কাজ করা
                  যায়  ফায়াবেজের মাধ্যমে ইউজার সাইনইন সাইন আউট
                  ইমপ্লিমেন্ট করা যায়।  এছাড়াও ফায়াবেজ হোস্টিং, এ্যাপ,
                  ডাটাবেইজ , স্টোরেজ, মেশিন লানিং, গেইম ডেভেলপমেন্ট এর জন্য
                  ব্যবহার করা হয়
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Blog;
