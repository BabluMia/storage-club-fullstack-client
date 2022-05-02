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
                When should you use nodejs and when should you use mongodb
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  একজন Developer এর জন্য Node & mongodb খুব দরকার। আমরা যখন কোনো
                  জায়গা থেকে ডাটা লোড করি বা নিয়ে আসি সব সময় ডাটা সমান থাকে না।
                  এই ডাটা আমরা সার্ভার থেকে আনি আর এই সার্ভার তৈরিতে Node.js ইউজ
                  হয়। আবার আমরা ডাটা ডিলিট, আপডেট, ক্রিয়েট, ইমসার্ট করে থাকি এই
                  ডাটা গুলো সংরক্ষণের জন্য ডাটাবেইজ হিসেবে mongodb ইউজ করি
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
                  যখন একটি সার্ভার একটি JWT পায়, তখন এটি নিশ্চিত করতে পারে যে
                  এতে থাকা ডেটা বিশ্বাসযোগ্য হতে পারে কারণ এটি Token দ্বারা
                  ভেরিফাই। একবার পাঠানো হলে কোনো JWT Change করতে পারবে না। JWT
                  ইউজারের ডাটা জাচাই করে তাকেই তার ডাটা দেখায়। এতে করে ইউজারের
                  ডাটা অনেকটা সিকিউরিটি পায়। অন্য কেউ চাইলেও ডাটা দেখতে পারে না।
                  JWT টোকেন ডাটার ফরমেটে পরিবর্তন করে ফেলে। আবার যখন সঠিক ইউজার
                  ডাটার জন্য রিকোয়েস্ট পাঠায় তা সঠিক ফরমেট করে দেয়
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
