# HashImage
<!-- ![GitHub Repo stars](https://img.shields.io/github/stars/v2dha/HashImage?color=orange)
![GitHub forks](https://img.shields.io/github/forks/v2dha/HashImage?color=yellow)
![GitHub contributors](https://img.shields.io/github/contributors/v2dha/HashImage)
![GitHub issues](https://img.shields.io/github/issues/v2dha/HashImage?color=brown) 
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/v2dha/HashImage?color=blue)
![GitHub pull requests](https://img.shields.io/github/issues-pr/v2dha/HashImage?color=orange)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/v2dha/HashImage)
 -->

<p align="center">
  <img src="/images/logo.png" width="350" alt="logo" />
  <h1 align="center">HashImage</h1>
  <p align="center">
  
  <br/>
 A decentralized, censorship-resistant and image-sharing platform
  <br />
 where users can earn in celo cryptocurrency by posting images in the form of art, photographs or even memes.
  <br />
  <br />
  </p>
</p>
<hr>

# Problem Statement
Centralized image-sharing platform creators have full control over what content is shown to the user. These platforms have algorithms that effectively censor users by hiding certain content and sharing specific content to the users according to what the creator thinks is best and lacks transparency. 

Apart from this, various content creators often post their content in the form of art, photographs or memes which do get applauded in the form of likes, comments and reach but there is no real-time transparent method to earn through the content uploaded by them.

# Project Idea
The idea is to create a Decentralized Image-Sharing application where content creators or users can earn in celo cryptocurrency by posting images in the form of art, photographs or even memes. 

All the images uploaded are stored on a decentralized file storage system called IPFS so the images are fully censorship-resistant and there is only one transparent algorithm that is defined in the smart contract and is immutable.

After the image is posted, users can pay the content creators if they like the content using their celo wallet.

# [Working](https://youtu.be/53u1cwjQQKo)
- Users can log in to their celo extension wallet to connect celo wallet.
- They can then choose to post images or view their feed and reward the creator of the image they like.
- In case of post, the user can upload the image from their device which would be connected to the deployed smart contract and the images would get stored on IPFS and a hash corresponding to that particular image is returned which is thus displayed on the feed.
- On the feed along with the image, the account address of the content creator is also displayed to which the users can make payments.
- In case of making payment to a particular account address, the users are required to sign the particular transaction using their celo wallet.
- On successful transactions, the content creator would receive the payment in their celo wallet.

Note : Users would need to install Celo Extension Wallet in order to access the site.

# Screenshots
<img src="/images/0.png">
<img src="/images/1.jpg">
<img src="/images/2.jpg">
<img src="/images/3.jpg">
<img src="/images/4.jpg">
<img src="/images/5.jpg">

# Tech Stack
* Solidity
* Truffle Suite
* React.js
* IPFS
* Celo Extension Wallet and Celo Account

# Future Scope
- This project can be extended to blogs, videos and all sorts of digital content.
- It can also include a paywall to view high-quality content with maximum rewards.
