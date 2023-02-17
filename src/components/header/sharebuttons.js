import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  background-color: #3b5998;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 16px;
`;

const ShareButton = () => {
    const handleShare = (platform) => {
      // Define the URL you want to share
      const shareUrl = "https://www.your-website.com";
  
      switch (platform) {
        case "whatsapp":
          window.open(`whatsapp://send?text=${encodeURIComponent(shareUrl)}`);
          break;
        case "pinterest":
          window.open(`http://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}`);
          break;
        case "telegram":
          window.open(`https://telegram.me/share/url?url=${encodeURIComponent(shareUrl)}`);
          break;
        case "discord":
          window.open(`https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify%20email%20connections%20guilds.join&state=STATE`);
          break;
        case "facebook":
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
          break;
        case "twitter":
          window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`);
          break;
        case "instagram":
          window.open(`https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`);
          break;
        case "snapchat":
          window.open(`snapchat://share?url=${encodeURIComponent(shareUrl)}`);
          break;
        default:
          break;
      }
    };
  
    return (
      <div>
        <Button onClick={() => handleShare("whatsapp")}>Share on WhatsApp</Button>
        <Button onClick={() => handleShare("pinterest")}>Share on Pinterest</Button>
        <Button onClick={() => handleShare("telegram")}>Share on Telegram</Button>
        <Button onClick={() => handleShare("discord")}>Share on Discord</Button>
        <Button onClick={() => handleShare("facebook")}>Share on Facebook</Button>
        <Button onClick={() => handleShare("twitter")}>Share on Twitter</Button>
        <Button onClick={() => handleShare("instagram")}>Share on Instagram</Button>
        <Button onClick={() => handleShare("snapchat")}>Share on Snapchat</Button>
      </div>
    );
  };
  
  export default ShareButton;