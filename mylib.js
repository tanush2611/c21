function isTouching(s,a){
  if(s.x-a.x<s.width/2+a.width/2&&a.x-s.x<a.width/2+s.width/2&&s.y-a.y<a.height/2+s.height/2&&a.y-s.y<a.height/2+s.height/2){
    return true;
  }
  else {
    return false;
    }
  }