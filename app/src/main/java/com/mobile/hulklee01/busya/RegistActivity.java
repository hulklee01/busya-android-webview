package com.mobile.hulklee01.busya;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.KeyEvent;
import android.webkit.JsResult;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.Console;

public class RegistActivity extends AppCompatActivity {

    private WebView mWebView;
    private WebSettings mWebSettings;
    private String kakaoid;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web);

        Intent intent = getIntent();
        long temp = intent.getLongExtra("kakaoid", 0);
        kakaoid = Long.toString(temp);

        mWebView = (WebView) findViewById(R.id.activity_main_webview);

        mWebSettings = mWebView.getSettings();
        mWebSettings.setJavaScriptEnabled(true);

        mWebView.setWebChromeClient(new WebChromeClient(){
            @Override
            public boolean onJsAlert(WebView view, String url, String message, JsResult result) {
                return super.onJsAlert(view, url, message, result);
            }
        });

        mWebView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                Log.d("check", "shouldOverriding" + url);
                view.loadUrl(url);
                return true;
            }
            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                Log.d("check", "onpagefinished" + url);
                mWebView.loadUrl("javascript:setMessage('" + kakaoid +"')");
            }
        });
        mWebView.loadUrl("https://busya.azurewebsites.net/redirection.html");
//        mWebView.loadUrl("http://busya.azurewebsites.net/redirection.html");
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK) {
            if (mWebView.canGoBack()) {
                mWebView.goBack();
                return false;
            }
        }
        return super.onKeyDown(keyCode, event);
    }
}
