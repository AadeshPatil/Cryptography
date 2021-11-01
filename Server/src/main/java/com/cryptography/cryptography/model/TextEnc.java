package com.cryptography.cryptography.model;

public class TextEnc {

    String text;
    String key;
    String UserId;

    public String getUserId() {
        return UserId;
    }

    public void setUserId(String userId) {
        UserId = userId;
    }

    public String getKey() {
        return key;
    }

    public TextEnc(String text, String key, String userId) {
        this.text = text;
        this.key = key;
        UserId = userId;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}
