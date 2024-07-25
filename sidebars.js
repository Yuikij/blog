/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
    // 备忘录
    memorandum: [{type: 'autogenerated', dirName: 'memorandum'}],
    // 算法
    algorithm: [{type: 'autogenerated', dirName: 'algorithm'}],
    // 数据库
    database: [{type: 'autogenerated', dirName: 'database'}],
    // 分布式系统
    distributedSystems: [{type: 'autogenerated', dirName: 'distributedSystems'}],
// ---------- 基础知识 -----------
    // basicKnowledge: [{type: 'autogenerated', dirName: 'basicKnowledge'}],
    // 编程语言
    programmingLanguage: [{type: 'autogenerated', dirName: 'basicKnowledge/programmingLanguage'}],
    // 网络
    network: [{type: 'autogenerated', dirName: 'basicKnowledge/network'}],
// ---------- 基础软件 -----------
    git: [{type: 'autogenerated', dirName: 'basicSoftware/Git'}],
    operation: [{type: 'autogenerated', dirName: 'basicSoftware/Operation'}],
    design: [{type: 'autogenerated', dirName: 'basicSoftware/Design'}],
    // 语言学习
    naturalLanguage: [{type: 'autogenerated', dirName: 'naturalLanguage'}],
    prepareExam: [{type: 'autogenerated', dirName: 'prepareExam'}],
    publishClass: [{type: 'autogenerated', dirName: 'publishClass'}],

    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      'intro',
      'hello',
      {
        type: 'category',
        label: 'Tutorial',
        items: ['tutorial-basics/create-a-document'],
      },
    ],
     */
};

module.exports = sidebars;
