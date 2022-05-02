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
                    <p className="mt-2">Javascript</p>
                    <p className="my-2">
                      জাভাস্ক্রিপ্ট হলো একটি প্রোগ্রামিং লেঙ্গুয়েজ এটি একমাত্র
                      ক্লাইন্ট সাইটে রান করা যায়। মূলত জাভাস্ক্রিপ্ট ক্লাইট
                      সাইটে ইউজের জন্য। জাভাস্ক্রিপ্ট Html ইলিমেন্ট নিয়ে কাজ
                      করতে পারে। জাভাস্ক্রিপ্ট ফ্রন্টএন্ড এর জন্য ব্যবহার করা হয়
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="mt-2">Node.js</p>
                    <p className="my-2">
                      Node.js হলো জাভাস্ক্রিপ্ট এর রানটাইম এনভায়রনমেন্ট। এটি
                      মোস্টলি সার্ভার সাইটে ইউজ হয়। এর দ্বারা জাভাস্ক্রিপ্ট
                      ব্রাউজারের ভাইরে রান করানো যায়। Html ইলিমেন্ট নিয়ে কাজ
                      করতে পারে না V8 ইঞ্জিন এর দ্বারা রান করানো হয়। সার্ভার
                      তৈরিতে ব্যবহার করা হয়।
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Differences between sql and nosql databases. authentication?
              </Accordion.Header>
              <Accordion.Body>
                <p className="my-2">
                  ফায়াবেজ আমাদের অনেক সার্ভিস প্রদান করে থাকে। ফায়ারবেজ খুব
                  সহজেই ব্যবহার করা যায় । ফায়ারবেজ গুগলের স্টোরেজ সিস্টেম। এটি
                  সহজ হওয়ার পাশাপাশি ওনেক সিকিউরিটিও প্রদান করে থাকে। যার ফলে
                  আমি ফায়ারবেজ ব্যবহার করি <br />
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
                একটি JWT হল কিছু JSON ডেটার মালিক যাচাই করার একটি প্রক্রিয়া।
                যখন একটি সার্ভার একটি JWT পায়, তখন এটি নিশ্চিত করতে পারে যে এতে থাকা ডেটা বিশ্বাসযোগ্য হতে পারে কারণ এটি Token দ্বারা ভেরিফাই। একবার পাঠানো হলে কোনো মধ্যস্থতা JWT Change করতে পারবে না।
                JWT ইউজারের ডাটা জাচাই করে তাকেই তার ডাটা দেখায়। এতে করে ইউজারের ডাটা অনেকটা সিকিউরিটি পায়। অন্য কেউ চাইলেও ডাটা দেখতে পারে না।
                JWT টোকেন ডাটার ফরমেটে পরিবর্তন করে ফেলে। আবার যখন সঠিক ইউজার ডাটার জন্য রিকোয়েস্ট পাঠায় তা সঠিক ফরমেট করে দেয়
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
